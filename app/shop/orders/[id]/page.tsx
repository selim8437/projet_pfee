import { ConsultOrder } from "@/components/component/consult-order";


export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;


  return (
    <main>
      <ConsultOrder orderId={id} />
    </main>
  );
}


