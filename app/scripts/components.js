AFRAME.registerComponent('look-at', {
    schema: { type: 'selector' },

    init: function () {
        console.log('hello');
    },

    tick: function () {
        this.el.object3D.lookAt(this.data.object3D.position)
    }
})
