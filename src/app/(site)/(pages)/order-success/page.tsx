import OrderSuccess from "@/components/OrderSuccess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Success | ABL NATASHA ENTERPRISES",
  description: "Your order has been successfully placed",
};

const OrderSuccessPage = () => {
  return (
    <main>
      <OrderSuccess />
    </main>
  );
};

export default OrderSuccessPage;
