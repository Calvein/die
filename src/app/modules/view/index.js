class View {
    constructor(options) {
        // Store $el/el
        this.$el = $(options.el)
        this.el = this.$el.get(0)

        // Store parent
        this.parent = options.parent || this

        this.initialize(options)
    }

    // Get elements inside the view
    $(sel) {
        return this.$el.find(sel)
    }
}

module.exports = View