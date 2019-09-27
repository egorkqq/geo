import React from 'react';
import { Map, TileLayer, Polygon } from 'react-leaflet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { countries } from './countriesData';
import { useSessionStorage } from '../misc/useSessionStorage';
import { usePrevious } from '../misc/usePrevious';

const mapStyle = {
  height: '90vh',
};

const Area = styled(Polygon)`
  fill-opacity: 0.6;
  position: relative;

  &:hover {
    fill-opacity: 0;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  left: ${(p) => p.left}px;
  top: ${(p) => p.top}px;
  padding: 10px;
  transition: ${(p) => p.theme.transition};
  opacity: ${(p) => (p.opened ? 1 : 0)};
  z-index: 10000;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.main};
`;

const Text = styled.span`
  font-size: 18px;
`;

const All = ({ dark }) => {
  const [coords, setCoords] = useSessionStorage('mapCoords', [47, 49]);
  const [zoom, setZoom] = useSessionStorage('mapZoom', 3);
  const [current, setCurrent] = React.useState({
    top: 0,
    left: 0,
    name: undefined,
    code: undefined,
    opened: false,
  });
  const [showTip, setShowTip] = React.useState(true);

  const initZoom = zoom;
  const initCoords = coords;

  const closeTooltip = () => setCurrent({ ...current, opened: false });
  const onViewportChanged = ({ center, zoom }) => {
    setZoom(zoom);
    setCoords(center);
    closeTooltip();
  };
  const onClick = (e, code, name) => {
    setCurrent({
      top: e.containerPoint.y,
      left: e.containerPoint.x,
      name,
      code,
      opened: true,
    });
  };

  React.useEffect(() => {
    const timer = setTimeout(() => setShowTip(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Map
      style={mapStyle}
      animate
      length={4}
      center={initCoords}
      zoom={initZoom}
      onViewportChanged={onViewportChanged}
      minZoom={2}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={
          dark
            ? 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            : 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
        }
      />
      {countries.map((country) => (
        <Area
          key={country.code}
          positions={country.borders}
          stroke
          opacity={0.1}
          color={dark ? 'rgba(255,255,255, 0.2)' : 'rgba(0,0,0,0.0)'}
          onClick={(e) => onClick(e, country.code, country.name)}
        />
      ))}
      <Tooltip opened={current.opened} top={current.top} left={current.left}>
        <Link to={`/country/${current.code}`}>{current.name}</Link>
      </Tooltip>
      <Tooltip left={50} top={10} opened={showTip}>
        <Text>Tip: just click on the country</Text>
      </Tooltip>
    </Map>
  );
};

export default All;
