import {
  IconSearch,
  IconCircleArrowRight,
  IconUserFilled,
  IconChevronDown,
  IconArrowDownCircleFilled,
  IconCircleArrowDown,
  IconArrowBack,
} from "@tabler/icons-react";
// import image

export default function Atendimento() {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex items-center justify-between text-white p-2"
        id="Atendimento"
      >
        <div>
          <p className="abront-bold text-2xl">Atendimento</p>
          <h1>Protocolo:</h1>
        </div>
        <div className="flex gap-2 bg-[#003CBF] border-[#1E69FF] items-center px-6 py-4 rounded">
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
      </div>
      <div
        className="flex flex-col items-center px-4 py-4 justify-between bg-azulEscuro text-white border border-zinc-800 rounded-lg"
        id="Cliente"
      >
        <div className="flex flex-col items-center justify-between gap-4 w-full">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xl">Cliente</h3>
              <span>Atendimento iniciado em 13/11/2023 - 09:59</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="text-zinc-400">Em andamento</span>
              <IconCircleArrowDown width={14} height={14} />
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between gap-6 w-full">
              <div className="flex flex-1 gap-6">
                <div className="flex w-2/5 items-center justify-start gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
                  <div className="flex items-center ">
                    <IconUserFilled />
                  </div>
                  <div>
                    <span className="text-zinc-400 block">Nome completo</span>
                    <span className="font-bold">Carlos da Silva Júnior</span>
                  </div>
                </div>
                <div className="flex w-1/5 items-center justify-start gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
                  <div className="flex items-center">
                    <IconUserFilled />
                  </div>
                  <div>
                    <span className="text-zinc-400 block">CPF</span>
                    <h1 className="font-bold">032.056.222-83</h1>
                  </div>
                </div>
                <div className="flex w-2/5 items-center justify-start gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
                  <div className="flex items-center">
                    <IconUserFilled />
                  </div>
                  <div className="flex">
                    <h1 className="font-bold">Canal de atendimento</h1>
                    <IconChevronDown />
                  </div>
                </div>
              </div>
              <div className="flex w-1/5 items-center justify-start gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
                <div className="flex items-center">
                  <IconUserFilled />
                </div>
                <div className="flex">
                  <h1 className="font-bold">Tipo de atendimento</h1>
                  <IconChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-6 px-4 py-4 justify-between bg-azulEscuro border text-white border-[#1F1E3A] rounded-lg"
        id="Produto"
      >
        <div>
          <h3 className="text-xl">Produto</h3>
        </div>
        <div className="flex w-full justify-between gap-6">
          <div className="flex gap-6 w-4/5">
            <div className="flex w-3/5 items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div className="flex flex-1 justify-between">
                <span className="font-bold">Produto</span>
                <IconChevronDown />
              </div>
            </div>
            <div className="flex w-1/5 items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Código do produto</span>
                <span className="font-bold">X1235Y789-0</span>
              </div>
            </div>
            <div className="flex w-1/5 items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Categoria</span>
                <span className="font-bold">Laticínio</span>
              </div>
            </div>
          </div>
          <div className="flex w-1/5">
            <div className="flex flex-1 items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Fabricação</span>
                <span className="font-bold">12/11/2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-start gap-1 px-4 py-2 w-4/5 pt-4 bg-azulContainerFPgA rounded border border-blue-600">
            <div className="flex items-center">
              <IconUserFilled />
            </div>
            <div>
              <p>Descrição dos problemas</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-1/5">
            <div className="flex w-full items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Validade</span>
                <h1 className="font-bold">12/11/2024</h1>
              </div>
            </div>
            <div className="flex w-full items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">LOTE</span>
                <h1 className="font-bold">10</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-4 py-4 bg-azulEscuro border border-[#1F1E3A] text-white">
        <div className="flex">
          <h3 className="text-xl">Informações de Compra</h3>
        </div>
        <div className="flex gap-6 w-full">
          <div className="flex gap-6 w-4/5">
            <div className="flex w-full items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Local de compra</span>
                <h1 className="font-bold">Mercantil Queiroz</h1>
              </div>
            </div>
            <div className="flex w-full items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Estado</span>
                <h1 className="font-bold">Ceará</h1>
              </div>
            </div>
            <div>
              <div className="flex w-full items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
                <div className="flex items-center ">
                  <IconUserFilled />
                </div>
                <div>
                  <span className="text-zinc-400 block">Cidade</span>
                  <h1 className="font-bold">Capistrano</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/5">
            <div className="flex w-full items-center gap-1 px-4 py-2 bg-azulContainerFPgA rounded border border-blue-600">
              <div className="flex items-center ">
                <IconUserFilled />
              </div>
              <div>
                <span className="text-zinc-400 block">Bairro</span>
                <h1 className="font-bold">Centro</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex gap-10 w-1/4 text-white ">
          <div className="flex items-center justify-center gap-3 bg-purple-500 hover:bg-purple-700 transition-colors w-1/2 py-2 rounded-[100px]">
            <IconArrowBack />
            <p>Limpar</p>
          </div>
          <div className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-800 tran-colors w-1/2 py-2 rounded-[100px]">
            <IconCircleArrowRight />
            <p>Registrar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
