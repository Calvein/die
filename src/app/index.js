const View = require('./modules/view')
const Shake = require('./modules/shake')
const Dice = require('./components/dice')
const HelpPanel = require('./components/help-panel')
const OptionsPanel = require('./components/options-panel')

class App extends View {
    initialize(options) {
        // Store elements
        this.$panels = this.$('.panel')

        // Setup panels
        this.helpPanel = new HelpPanel({
            el: this.$('[data-panel=help]')
          , parent: this
        })

        this.options = {}
        this.optionsPanel = new OptionsPanel({
            el: this.$('[data-panel=options]')
          , parent: this
        })

        // Setup dice
        this.dice = new Dice({
            el: this.$('.dice')
          , parent: this
        })

        // Setup events
        $(window).on('keydown', this.keydown.bind(this))
        this.$el.on('click', '.trigger', this.clickTrigger.bind(this))
        this.$el.on('click', '.dice', this.clickDice.bind(this))
        // Detect screen orientation
        this.mq = window.matchMedia('(orientation: portrait)')
        this.mq.addListener(this.orientationChange.bind(this))
        // Detect shake
        this.shakeEvent = new Shake()
        this.shakeEvent.start()
        $(window).on('shake', this.shake.bind(this))

        this.renderDice()
    }

    checkOrientation() {
        if (this.mq.matches) {
            this.dice.setFontSize('portrait')
        } else {
            this.dice.setFontSize('landscape')
        }
    }

    renderDice() {
        this.dice.render(+location.hash.slice(1) || 1)
        this.orientationChange()
    }


    // Events //
    keydown(e) {
        if ($('input:focus').length) return

        // space: toggle play/pause
        // Not when focus, except when on a play/pause button
        if (e.keyCode === 32) {
            e.preventDefault()
            this.renderDice()
        }
    }

    clickTrigger(e) {
        var $el = $(e.currentTarget)
        var trigger = $el.data('trigger')
        this.$panels.filter(`[data-panel=${trigger}]`).toggleClass('open')
    }

    clickDice(e) {
        this.renderDice()
    }

    orientationChange() {
        this.checkOrientation()
    }

    shake() {
        if ('vibrate' in navigator) {
            navigator.vibrate(200)
        }
        this.renderDice()
    }
}


module.exports = App