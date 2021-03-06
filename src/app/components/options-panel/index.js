const View = require('../../modules/view')

const tmpl = require('./index.jade')

class OptionsPanel extends View {
    initialize(options) {
        this.render()

        // Setup events
        this.$el.on('change', 'input', this.changeInput.bind(this))
    }

    render() {
        var talk = this.changeOption('talk', this.getOption('talk'))
        var anim = this.changeOption('anim', this.getOption('anim'))
        var totals = this.changeOption('totals', this.getOption('totals'))

        this.$el.html(tmpl({
            talk: talk
          , anim: anim
          , totals: totals
        }))
    }

    getOption(option) {
        option = localStorage.getItem(option)
        option = option === 'false' ? false : true
        return option
    }

    changeOption(option, checked) {
        this.parent.options[option] = checked
        localStorage.setItem(option, checked)

        return checked
    }


    // Events //
    changeInput(e) {
        var el = e.currentTarget
        this.changeOption(el.name, el.checked)
    }
}


module.exports = OptionsPanel