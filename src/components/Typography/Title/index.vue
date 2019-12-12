<script>
import TypographyText from '@/components/Typography/Text'
export default {
  functional: true,
  props: {
    level: {
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(value) > -1,
      default: () => 'h1',
    },
  },
  render (h, context) {
    const { level, ...restProps } = context.props
    return <TypographyText element={level} {...restProps} />
  },
}
</script>
