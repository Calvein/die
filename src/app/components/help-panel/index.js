const View = require('../../modules/view')

const tmpl = require('./index.jade')

class HelpPanel extends View {
    initialize(options) {
        this.render()
    }

    render() {
        var supportTouch = 'ontouchstart' in window
        var supportDeviceMotion = 'ondevicemotion' in window

        this.$el.html(tmpl({
            supportTouch: supportTouch
          , supportDeviceMotion: supportDeviceMotion
        }))
    }
}


module.exports = HelpPanel