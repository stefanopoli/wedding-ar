let tableau = [
    {
        key: 'tableSposi',
        marker: 'assets/markers/pattern-table-sposi-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2',
        parchment: 'assets/images/heart.png'
    },
    {
        key: 'table1',
        marker: 'assets/markers/pattern-table1-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2',
        parchment: 'assets/images/parchment_table1.png'
    },
    {
        key: 'table2',
        marker: 'assets/markers/pattern-table2-marker.patt',
        model: 'assets/models/table.gltf',
        position: '0 0 0',
        scale: '0.2 0.2 0.2',
        parchment: 'assets/images/parchment_table2.png'
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
    let scene = document.querySelector('a-scene');
    buildTableau(scene);
};

function buildTableau(parent) {
    tableau.forEach(marker => {
        let markerEntity = document.createElement('a-marker');
        markerEntity.setAttribute('preset', 'custom');
        markerEntity.setAttribute('type', 'pattern');
        markerEntity.setAttribute('url', marker.marker);

        let tableEntity = document.createElement('a-entity');
        tableEntity.setAttribute('position', marker.position);
        tableEntity.setAttribute('scale', marker.scale);
        tableEntity.setAttribute('gltf-model', marker.model);

        if(marker.parchment) {
            let parchmentEntity = document.createElement('a-plane');
            parchmentEntity.setAttribute('src', marker.parchment);
            parchmentEntity.setAttribute('position', '1 0 0');
            parchmentEntity.setAttribute('look-at', '[camera]');
            parchmentEntity.setAttribute("material", "opacity: 100.0; transparent: true");
            markerEntity.appendChild(parchmentEntity);
        }

        markerEntity.appendChild(tableEntity);

        parent.appendChild(markerEntity);
    });
}


