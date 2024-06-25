import "../globals.css";
import ToastProvider from "@/providers/toast-provider";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div
          className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
               from-sky-600 to-blue-900"
        >
          <ToastProvider>{children}</ToastProvider>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
