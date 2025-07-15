import { Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layout/DashboardLayout";
import DashboardPages from "../features/dashboard";
import MenuSatu from "../features/menu-1";
import FOrmTest from "../features/menu-2";

export default function DashboardRoute() {
  return (
    <Route path="/" element={<DashboardLayout />}>
      {/* Redirect dari "/" ke "/dashboard" */}
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route path="dashboard" element={<DashboardPages />} />
      <Route path="menu-satu" element={<MenuSatu />} />
      <Route path="menu-dua" element={<FOrmTest />} />
    </Route>
  );
}
