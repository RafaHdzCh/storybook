const button = "border-none text-white py-3 px-8 text-center no-underline inline-block text-base rounded cursor-pointer";

export const primary = "bg-cyan-500";
export const success = "bg-green-500";
export const danger = "bg-red-500";
export const secondary = "bg-cyan-100 text-black";

export const sizes = {
  small: "py-2 px-4 text-sm",
  medium: "py-3 px-8 text-base",
  large: "py-4 px-12 text-lg",
};

export default function Button({children, variant = primary, size = sizes.medium}) 
{
  return (
    <button className={`${button} ${variant} ${size}`}>
      {children}
    </button>
  );
}