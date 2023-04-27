document.addEventListener('alpine:init', () => {
    Alpine.data('breakingNews', (counter, interval) => ({
        totalItem: counter,
        speed: interval || 5000,
        index: 0,
        interval: null,

        init() {
            if (this.totalItem > 0) {
                this.interval = setInterval(() => {
                    this.transform(this.increaseIndex())
                }, this.speed)
            }
        },

        increaseIndex() {
            if ((this.index + 1) > this.totalItem - 1) {
                this.index = 0;
            } else {
                this.index++;
            }

            return this.index;
        },

        transform(index) {
            if (!this.totalItem) {
                console.log('not process', this.interval)
                clearInterval(this.interval)
                return;
            }
            let itemTransform = 100 / this.totalItem;
            let transform = itemTransform * index
            this.$refs.panel.style = `transform: translateY(-${transform}%)`;
        }
    }))

    Alpine.data('tabs', (count, active) => ({
        total: count || 0,
        active: active || 0,

        init() {
            this.select()
            const component = this
            $(this.$refs.tabs).find('.tab-list__item').on('click', (e) => {
                e.preventDefault()
                const el = $(e.currentTarget).closest('.tab-list__item')
                const tabs = $(this.$refs.tabs).find('.tab-list__item');
                const index = tabs.index(el)

                this.select(index)
            })
        },

        select(index = 0) {
            const tabs = $(this.$refs.tabs).find('.tab-list__item');
            const panels = $(this.$refs.panels).find('.tab-list__panel');
            const currentTab = tabs[index]

            tabs.removeClass('active')
            panels.removeClass('active')

            $(currentTab).addClass('active')
            $(panels[index]).addClass('active')
        }
    }))
})

$(document).ready(function() {
    $('.slider').each((index, item) => {
        $(item).find('.slider__view').slick({});
    })

    $('.slider--control').on('click', function(e) {
        e.preventDefault();
        console.log('slider', e.currentTarget);
        const slider = $(this).closest('.slider').find('.slider__view')

        if ($(this).hasClass('control--left')) {
            $(slider).slick('slickPrev')
        } else {
            console.log('slickNext', slider)
            $(slider).slick('slickNext')
        }
    })
})