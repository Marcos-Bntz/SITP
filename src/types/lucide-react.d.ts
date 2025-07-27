declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  
  export const LineChart: ComponentType<IconProps>;
  export const Users: ComponentType<IconProps>;
  export const FileText: ComponentType<IconProps>;
  export const Menu: ComponentType<IconProps>;
  export const X: ComponentType<IconProps>;
  export const User: ComponentType<IconProps>;
  export const BarChart2: ComponentType<IconProps>;
  export const Bell: ComponentType<IconProps>;
  export const Store: ComponentType<IconProps>;
  export const Truck: ComponentType<IconProps>;
  export const Phone: ComponentType<IconProps>;
  export const Calendar: ComponentType<IconProps>;
  export const BarChart: ComponentType<IconProps>;
  export const PieChart: ComponentType<IconProps>;
  export const MessageSquare: ComponentType<IconProps>;
  export const Vote: ComponentType<IconProps>;
  export const MapPin: ComponentType<IconProps>;
  export const Clock: ComponentType<IconProps>;
  export const Star: ComponentType<IconProps>;
  export const Heart: ComponentType<IconProps>;
  export const Shield: ComponentType<IconProps>;
} 