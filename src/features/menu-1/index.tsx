import { FileWarning } from "lucide-react";
import { CustomAlert } from "../../components/dashboard-molecules/head-alert-custom";
import { ProductTable } from "./components/raw-table";

export default function MenuSatu() {
  return (
    <div className="min-h-screen bg-yellow-50 p-4 sm:p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 -rotate-1 transform text-2xl font-black text-black sm:mb-6 sm:text-4xl">
          PRODUCT DASHBOARD
        </h1>

        <CustomAlert
          className="mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:mb-6"
          status="info"
          title="Hallo Selamat Datang | Dashboard"
          description="Anda dapat melihat, mengupdate, dan menghapus Produk dari Dashboard."
          icon={<FileWarning className="h-5 w-5" />}
        />

        <ProductTable />
      </div>
    </div>
  );
}
