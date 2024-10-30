"use client";
import Image from "next/image";
import {
  IconSearch,
  IconCircleArrowRight,
  IconDots,
  IconCalendarMonth,
  IconCircleFilled,
  IconFilter,
  IconPdf,
  IconDownload,
  IconMaximize,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const invoices = [
  {
    client: "Amanda Silva Santos",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "Carlos Oliveira Lima",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Em andamento",
    paymentMethod: "Credit Card",
  },
  {
    client: "Gabriela Pereira Costa",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "Leonardo Martins Rocha",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "Isabela Ferreira Oliveira",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "Rafael Souza Almeida",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Em andamento",
    paymentMethod: "Credit Card",
  },
  {
    client: "Juliana Santos Pereira",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "André Costa Pereira",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "Larissa Oliveira Lima",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
  {
    client: "Felipe Rodrigues Alves",
    product: "Leite Integral Betânia",
    expert: "Joé Guilherme",
    protocol: "",
    serviceDate: "15/Jan/2021",
    paymentStatus: "Finalizado",
    paymentMethod: "Credit Card",
  },
];

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-3">
      <header className="flex p-4 rounded-md bg-[#100E34] items-center gap-4">
        <div className="border w-full bg-[#12103E] border-[#1E69FF] py-2 rounded flex items-center">
          <div className="flex flex-col justify-center items-center border-r-2 border-[#3833AB] w-1/6 text-white">
            <h1 className="font-bold text-2xl">153</h1>
            <p>Atendimentos</p>
          </div>
        </div>
        <div className="flex flex-1 gap-2 bg-[#003CBF] border-[#1E69FF] items-center px-6 py-6 rounded">
          <IconSearch
            width={20}
            height={20}
            className="cursor-pointer text-white"
          />
          <input
            type="text"
            placeholder="Buscar"
            className="flex flex-1 bg-transparent placeholder:text-white outline-none text-white"
          />
          <IconCircleArrowRight
            width={20}
            height={20}
            className="cursor-pointer text-white"
          />
        </div>
      </header>
      <div className="flex items-center justify-end gap-2 w-full px-8 text-[#003cbf]">
        <IconSearch />
        <IconFilter />
        <IconPdf />
        <IconDownload />
        <IconMaximize />
      </div>
      <main className="flex flex-col bg-blue-950 overflow-hidden">
        <Table className="text-white flex flex-col w-full">
          <TableHeader>
            <TableRow className="bg-[#100E34] border-none flex flex-1">
              <TableHead className="flex items-center justify-start w-1/6">
                Cliente
              </TableHead>
              <TableHead className="flex items-center justify-start w-1/6">
                Status
              </TableHead>
              <TableHead className="flex items-center justify-start w-1/6">
                Produto
              </TableHead>
              <TableHead className="flex items-center justify-start w-1/6">
                Expert
              </TableHead>
              <TableHead className="flex items-center justify-start w-1/6">
                Protocolo
              </TableHead>
              <TableHead className="flex items-center justify-start w-1/6">
                Data de atendimento
              </TableHead>
              <TableHead className="flex items-center justify-start w-1/6">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow
                key={index}
                className="flex flex-1"
                style={{
                  backgroundColor: index % 2 === 0 ? "#100E34" : "#171341",
                }}
              >
                <TableCell className="font-medium w-1/6">
                  {invoice.client}
                </TableCell>
                <TableCell className="flex gap-2 w-1/6">
                  <IconCircleFilled
                    className={`${
                      invoice.paymentStatus === "Finalizado"
                        ? "text-[#7FCDDE]"
                        : invoice.paymentStatus === "Em andamento"
                        ? "text-[#FFD100]"
                        : "text-red-400"
                    }`}
                  />
                  {invoice.paymentStatus}
                </TableCell>
                <TableCell className="w-1/6">{invoice.product}</TableCell>
                <TableCell className="w-1/6">{invoice.expert}</TableCell>
                <TableCell className="w-1/6">{invoice.protocol}</TableCell>
                <TableCell className="flex items-center gap-2 w-1/6">
                  <IconCalendarMonth />
                  {invoice.serviceDate}
                </TableCell>
                <TableCell className="flex justify-end w-1/6">
                  <IconDots className="cursor-pointer rotate-90" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="w-full bg-azulEscuro border-none">
            <div className="flex items-center justify-end w-full p-4">
                <span className="mr-2">Linhas por página:</span>
                <Select defaultValue="15">
                  <SelectTrigger className="w-[80px] bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none text-white rounded px-2 py-1">
                    <SelectValue placeholder="15" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              <div className="flex items-center justify-center gap-4 text-white p-2 rounded">
                <span>1-15 of 100</span>
                <button className="hover:text-gray-400">
                  <IconChevronLeft width={16} height={16} />
                </button>
                <button className="hover:text-gray-400">
                  <IconChevronRight width={16} height={16} />
                </button>
              </div>
            </div>
          </TableFooter>
        </Table>
      </main>
    </section>
  );
}
