import Leaflet from "leaflet";

import mapMarkerImg from "../images/map_marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [38, 60],
  iconAnchor: [19, 60],

  popupAnchor: [170, 2],
});

export default mapIcon;
