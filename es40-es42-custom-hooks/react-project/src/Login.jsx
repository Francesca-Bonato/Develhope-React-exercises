import { useLogin } from "./useLogin";

export function Login() {
  const { data, onInputChange, onSubmit, onReset } = useLogin();
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={data.username}
        onChange={onInputChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={data.password}
        onChange={onInputChange}
      />
      <button type="submit" onSubmit={onSubmit}>
        Submit
      </button>
      <button type="reset" onClick={onReset}>
        Reset
      </button>
    </form>
  );
}
