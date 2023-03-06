// 定义props类型
import type { ExtractPropTypes } from "vue"

export const iconProps = {
    name: {
        type: String
    }
}
export type IconProps = ExtractPropTypes<typeof iconProps>