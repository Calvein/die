const View = require('../../modules/view')
const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

class Dice extends View {
    initialize(options) {
        // Setup totals
        this.totals = []
        this.$total = $('<div>')
            .addClass('total')
            .appendTo(this.el)

        if ('SpeechSynthesisUtterance' in window) {
            this.speech = new SpeechSynthesisUtterance()
        }
    }

    render(throws) {
        if (throws) this.throws = throws

        this.numbers = []
        this.$('.die').remove()
        this.addDice()
    }

    addDice() {
        for (let die = 0, number, isLast; die < this.throws; die++) {
            isLast = die === this.throws - 1
            number = this.getRandomNumber()
            this.addDie(
                number
              , die
              , isLast ? this.showTotal.bind(this) : function(){}
            )
            this.numbers.push(number)
        }
    }

    addDie(number, i, cb) {
        var $el = $('<div>')
            .addClass('die')
            .attr('data-die', number)
            .appendTo(this.el)

        if (!this.parent.options.anim) {
            cb()
            return
        }

        var start = null
        var end = null
        var progress = null
        var self = this
        function step(timestamp) {
            if (!start) {
                start = timestamp
                end = 200 + 200 * i
            }
            progress = timestamp - start
            $el.attr('data-die', self.getRandomNumber())
            if (progress < end) {
                window.requestAnimationFrame(step)
            } else {
                $el.attr('data-die', number)
                cb()
            }
        }

        window.requestAnimationFrame(step)
    }

    showTotal() {
        var total = this.numbers.reduce(function(a, b) { return a + b })
        this.totals.push(total)

        var text = this.parent.options.totals ? this.totals.join(' - ') : total
        this.$total.text(text)

        // Say it
        this.say(total)

        // Change the title
        var title = this.numbers.map(d => dice[d - 1]).join(' + ')
        title += ' = ' + total
        document.title = title
    }

    say(text) {
        if (!this.speech) return
        if (!this.parent.options.talk) return

        speechSynthesis.cancel()
        this.speech.text = text
        speechSynthesis.speak(this.speech)
    }

    getRandomNumber(max = 6) {
        return Math.floor(max * Math.random()) + 1
    }

    setFontSize(orientation) {
        var fontSize = this.throws === 1 ? 60 : 100 / this.throws
        fontSize += orientation === 'portrait' ? 'vh' : 'vw'

        this.$('.die').css('font-size', fontSize)
    }
}


module.exports = Dice