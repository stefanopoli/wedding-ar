let tableau = [
    {
        key: 'tableSposi',
        marker: 'assets/markers/pattern-table-sposi-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2'
    },
    {
        key: 'table1',
        marker: 'assets/markers/pattern-table1-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2'
    },
    {
        key: 'table2',
        marker: 'assets/markers/pattern-table2-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2'
    },
    {
        key: 'table3',
        marker: 'assets/markers/pattern-table3-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2'
    },
    {
        key: 'table4',
        marker: 'assets/markers/pattern-table4-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2'
    }
];

window.onload = () => {
    const scene = document.querySelector('a-scene');

    let lon, lat;

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {
        console.log(`lat: ${position.coords.latitude} - lon: ${position.coords.latitude}`, position.coords);
        // alert(`lon: ${position.coords.longitude} ; lat: ${position.coords.latitude}`);

        // lat = position.coords.latitude + 0.000002;
        // lon = position.coords.longitude + 0.000002;
        lat = position.coords.latitude - 0.001;
        lon = position.coords.longitude - 0.001;

        // let tableEntity = document.createElement('a-entity');
        // // tableEntity.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lon};`);
        // tableEntity.setAttribute('gps-projected-entity-place', `latitude: ${lat}; longitude: ${lon};`);
        // tableEntity.setAttribute('scale', '5 5 5');
        // tableEntity.setAttribute('gltf-model', 'https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf');
        // scene.appendChild(tableEntity);

        // let tableEntity = document.createElement('a-entity');
        let heartEntity = document.createElement('a-obj-model');
        // tableEntity.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lon};`);
        heartEntity.setAttribute('gps-projected-entity-place', `latitude: ${lat}; longitude: ${lon};`);
        heartEntity.setAttribute('scale', '100 100 100');
        heartEntity.setAttribute('src', '#heart-obj');
        heartEntity.setAttribute('mtl', '#heart-mtl');
        scene.appendChild(heartEntity);

        // const placeText = document.createElement('a-link');
        // placeText.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${lon};`);
        // placeText.setAttribute('title', 'ciao');
        // placeText.setAttribute('scale', '15 15 15');

    });
};
