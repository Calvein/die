const View = require('../../modules/view')
const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

class Dice extends View {
    initialize(options) {
        if ('SpeechSynthesisUtterance' in window) {
            this.speech = new SpeechSynthesisUtterance()
        }
    }

    render(throws) {
        if (throws) this.throws = throws

        this.numbers = []
        this.$el.empty()
        this.addDice()
        this.showTotal()
    }

    addDice() {
        for (let die = 0, number; die < this.throws; die++) {
            number = this.getRandomNumber()
            this.addDie(number, die)
            this.numbers.push(number)
        }
    }

    addDie(number, i) {
        $('<div>')
            .addClass('die')
            .attr('data-die', number)
            .appendTo(this.el)
    }

    showTotal() {
        var total = this.numbers.reduce(function(a, b) { return a + b })
        $('<div>')
            .addClass('total')
            .text(total)
            .appendTo(this.el)

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