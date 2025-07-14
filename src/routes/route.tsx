import { Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "../layout/DashboardLayout";
import DashboardPages from "../features/dashboard";

export default function DashboardRoute() {
  return (
    <Route path="/" element={<DashboardLayout />}>
      {/* Redirect dari "/" ke "/dashboard" */}
      <Route index element={<Navigate to="dashboard" replace />} />

      <Route path="dashboard" element={<DashboardPages />} />
    </Route>
  );
}
