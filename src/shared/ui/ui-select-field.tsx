import clsx from "clsx";
import {SelectHTMLAttributes, PropsWithRef, useId} from "react";

export type UiSelectOptions = {
  value: string;
  label: string;
}

export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectOptions[];
}

export function UiSelectField({className, error, label, options, selectProps} : UiSelectFieldProps) {

  const id = useId()

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && <label className="block" htmlFor={id}>{label}</label>}
      <select {...selectProps} id={id} className={clsx(
        selectProps?.className, 
        "rounded border px-2 h-10 border-slate-300 focus:border-t-teal-600 outline-none",
      )}>
        {options?.map((option, i) => 
        <option key={i} value={option.value}>{option.label}</option>
      )}
      </select>
      {error && <div className="text-rose-400 text-sm">{error}</div>}
      
    </div>
  );
}