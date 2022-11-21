/**
 * <p>
 * Gitee 彩色图标
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-21 21:36
 */
 import Icon from '@ant-design/icons'
 import { CustomIconComponentProps, IconComponentProps } from '@ant-design/icons/lib/components/Icon'
 
 const MyIcon = (props: CustomIconComponentProps) => {
   return <svg {...props}>
     <use href="#icon-gitee"></use>
   </svg>
 }
 
 export const GiteeSymbolIcon = (props: Partial<CustomIconComponentProps>) => {
   return <Icon {...props} component={MyIcon as React.ForwardRefExoticComponent<any>} />
 }
 