export const InputField = ({
  name,
  type,
  placeholder,
  value,
  children,
  onChange,
  className = "", // Allow custom className to be passed
}) => {
  const InputComponent = type === `textarea` ? `textarea` : `input`;

  return (
    <div className="w-full mb-4">
      <label
        htmlFor={name}
        className="block font-semibold mb-2 text-[var(--text-primary)]"
      >
        {children}
      </label>
      <InputComponent
        type={type === `textarea` ? undefined : type}
        name={name}
        className={`text-[var(--text-primary)] bg-[var(--bg-secondary)] border-gray-300 border-[1px] focus:border-[var(--accent)] focus:outline-none w-full px-4 py-2 rounded-md focus:ring-2 focus:ring-[var(--accent)] ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        rows={type === `textarea` ? 4 : undefined}
      />
    </div>
  );
};
