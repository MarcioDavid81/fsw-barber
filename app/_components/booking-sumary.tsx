// import { format } from "date-fns";
// import { Button } from "./ui/button";
// import { Card, CardContent } from "./ui/card";
// import { SheetClose, SheetFooter } from "./ui/sheet";

// interface BookingSumaryProps {
//     service: BarbershopService
//     selectedDay: Date
//     selectedTime: string
//     barbershop: Pick<Barbershop, "name">
//     handleCreateBooking: () => void
// }

// const BookingSumary = () => {
//     return (
//         <Card>
//         <CardContent className="space-y-3 p-3">
//           <div className="flex items-center justify-between">
//             <h2 className="text-sm font-semibold">
//               {service.name}
//             </h2>
//             <p className="text-sm font-bold text-primary">
//               {Intl.NumberFormat("pt-BR", {
//                 style: "currency",
//                 currency: "BRL",
//               }).format(Number(service.price))}
//             </p>
//           </div>
//           <div className="mt-3 flex items-center justify-between">
//             <p className="text-sm capitalize text-gray-400">
//               Data
//             </p>
//             <p className="text-sm capitalize text-gray-400">
//               {format(selectedDay, "d 'de' MMMM", {
//                 locale: ptBR,
//               })}
//             </p>
//           </div>
//           <div className="mt-3 flex items-center justify-between">
//             <p className="text-sm capitalize text-gray-400">
//               Horário
//             </p>
//             <p className="text-sm text-gray-400">
//               {selectedTime}
//             </p>
//           </div>
//           <div className="mt-3 flex items-center justify-between">
//             <p className="text-sm text-gray-400">Barbearia</p>
//             <p className="text-sm text-gray-400">
//               {barbershop?.name}
//             </p>
//           </div>
//           <SheetFooter>
//             <SheetClose>
//               <Button
//                 className="w-full"
//                 variant="default"
//                 onClick={handleCreateBooking}
//               >
//                 Confirmar Reserva
//               </Button>
//             </SheetClose>
//           </SheetFooter>
//         </CardContent>
//       </Card>
//      );
// }

// export default BookingSumary;
