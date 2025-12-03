// "use client";
// import { useState } from "react";

// export default function AuthForm({
//   title,
//   fields,
//   onSubmit,
//   submitLabel = "Submit",
// }) {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [values, setValues] = useState(() => {
//     const initial = {};
//     fields.forEach((f) => (initial[f.name] = f.default || ""));
//     return initial;
//   });

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     try {
//       await onSubmit(values);
//     } catch (err) {
//       setError(err?.message || JSON.stringify(err));
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
//       <h2 className="text-2xl font-semibold">{title}</h2>
//       {fields.map((f) => (
//         <label key={f.name} className="block">
//           <div className="text-sm mb-1">{f.label}</div>
//           <input
//             type={f.type || "text"}
//             placeholder={f.placeholder}
//             value={values[f.name]}
//             onChange={(e) =>
//               setValues((prev) => ({ ...prev, [f.name]: e.target.value }))
//             }
//             className="w-full rounded border px-3 py-2"
//           />
//         </label>
//       ))}
//       {error && <div className="text-red-600">{error}</div>}
//       <button
//         disabled={loading}
//         className="w-full rounded bg-blue-600 text-white py-2"
//       >
//         {loading ? "Processing..." : submitLabel}
//       </button>
//     </form>
//   );
// }
