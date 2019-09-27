import React from 'react';
import { Map, TileLayer, Polygon } from 'react-leaflet';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { countries } from './countriesData';
import { useLocalStorage } from '../misc/useLocalStorage';
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

const All = ({ dark }) => {
  const [coords, setCoords] = useLocalStorage('mapCoords', [47, 49]);
  const [zoom, setZoom] = useLocalStorage('mapZoom', 3);
  const [current, setCurrent] = React.useState({
    top: 0,
    left: 0,
    name: undefined,
    code: undefined,
    opened: false,
  });

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
          color={dark ? 'rgba(255,255,255, 0.5)' : 'rgba(0,0,0,0.1)'}
          onClick={(e) => onClick(e, country.code, country.name)}
        />
      ))}
      <Tooltip
        opened={current.opened}
        top={current.top}
        left={current.left}
        code={current.code}
        name={current.name}
      >
        <Link to={`/country/${current.code}`}>{current.name}</Link>
      </Tooltip>
    </Map>
  );
};

export default All;
