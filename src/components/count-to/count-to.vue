<template>
    <div>
        <slot name='left'></slot><span ref="number" :id="eleId" :class='countClass'></span>
        <slot name='right'></slot>
    </div>
</template>
<script>
    import CountUp from 'countup'

    export default {
        name: 'CountTo',
        computed: {
            eleId() {
                return `count_up_${this._uid}`
            },
            data() {
                return {
                    counter: {}
                }
            },
            countClass() {
                return [
                    'count-to-number',
                    this.className
                ]
            }
        },
        props: {
            className: {
                type: String,
                default: ''
            },
            /**
             * @description 起始值
             */
            startVal: {
                type: Number,
                default: 0
            },
            /**
             * @description 最终值
             */
            endVal: {
                type: Number,
                required: true
            },
            /**
             * @description 小数点后保留几位小数
             */
            decimals: {
                type: Number,
                default: 0
            },
            /**
             * @description 动画延迟开始时间
             */
            delay: {
                type: Number,
                default: 0
            },
            /**
             * @description 渐变时长
             */
            duration: {
                type: Number,
                default: 1
            },
            /**
             * @description 是否使用变速效果
             */
            useEasing: {
                type: Boolean,
                default: false
            },
            /**
             * @description 是否使用变速效果
             */
            useGrouping: {
                type: Boolean,
                default: true
            },
            /**
             * @description 分组符号
             */
            separator: {
                type: String,
                default: ','
            },
            /**
             * @description 整数和小数分割符号
             */
            decimal: {
                type: String,
                default: '.'
            },
            className: {
                type: String,
                default: ''
            }
            /**当默认值为数组或对象时
             *default:()=>{
             * return {}||[]           
             }*/
        },
        watch: {
            endVal(newVal, oldVal) {
                this.counter.update(newVal)
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.emitEndEvent()
                    }, this.duration * 1000 + 10)
                })

            }
        },
        methods: {
            emitEndEvent() {
                setTimeout(() => {
                    this.$nextTick(() => {
                        this.$emit('on-animation-end', Number(this.getCount()))
                    })
                }, this.duration * 1000 + 5)
            },
            getCount() {
                return this.$refs.number.innerText
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
                    useEasing: this.useEasing,
                    useGrouping: this.useGrouping,
                    separator: this.separator,
                    decimal: this.decimal
                })
                setTimeout(() => {
                    this.counter.start()
                    this.emitEndEvent()
                }, this.delay)
            })
        }
    }
</script>
<style lang="less">
    @import './count-to.less';
</style>