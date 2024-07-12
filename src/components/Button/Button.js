const button = "border-none text-white py-3 px-8 text-center no-underline inline-block text-base rounded cursor-pointer";
export const primary = "bg-cyan-500";
export const success = "bg-green-500";
export const danger = "bg-red-500";
export const secondary = "bg-cyan-100 text-black";

export default function Button({children, variant = primary}) 
{
  return (
    <button className={`${button} ${variant}`}>
      {children}
    </button>
  );
}