"use client";
import { useState, useEffect } from "react";
import BackgroundLogin from "@/images/backgroundLogin.svg";
import Logo from "@/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(1, "O campo de e-mail não pode ser vazio").max(50),
  password: z.string().min(1, "O campo de senha não pode ser vazio").max(50),
});

export default function Login() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(false); // Estado para controlar a mensagem de aviso
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    watch,
    setValue,
    formState: { errors },
  } = form;

  const username = watch("username");
  const password = watch("password");

  useEffect(() => {
    if (username) {
      setValue("username", username);
    }
    if (password) {
      setValue("password", password);
    }
  }, [username, password, setValue]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!isChecked) {
      setShowWarning(true); // Exibe a mensagem de aviso se o checkbox não estiver marcado
      return;
    }

    setIsLoading(true);
    console.log(values);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/inicio");
    }, 1000);
  }

  const isFormValid = username && password && isChecked;

  return (
    <div className="flex items-center justify-center relative w-full h-screen overflow-hidden">
      <div className="w-full pt-10 absolute top-0 z-10">
        <div className="flex items-center justify-end gap-4 w-10/12">
          <span className="text-white">Ainda não tem uma conta?</span>
          <Link href={""}>
            <button className="bg-white px-4 py-2 rounded">Log In</button>
          </Link>
        </div>
      </div>
      <section className="flex z-10 w-1/2 h-4/6">
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-4 bg-azulDestaque text-white">
          <Image height={600} width={200} alt="logoApp" src={Logo} />
          <p className="text-center">
            Atendimento gerado, salva, gera protocolo de atendimento. Isso serve
            pra que o expert tenha interação com o cliente.
          </p>
        </div>
        <div className="flex flex-1 flex-col items-center justify-between py-12 px-4 bg-white">
          {showWarning && (
            <div className="mb-4 text-red-500">
              Por favor, preencha todos os campos e aceite os termos.
            </div>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-1 flex-col justify-between space-y-4"
            >
              <div className="flex flex-col gap-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      {errors.username && (
                        <FormMessage>{errors.username.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Senha"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      </FormControl>
                      {errors.password && (
                        <FormMessage>{errors.password.message}</FormMessage>
                      )}
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-top space-x-2">
                <Checkbox
                  id="terms1"
                  checked={isChecked}
                  onCheckedChange={(checked) => {
                    setIsChecked(checked);
                    setShowWarning(false); // Esconde a mensagem de aviso se o checkbox for marcado
                  }}
                />
                <div className="grid">
                  <label htmlFor="terms1" className="text-primary/70">
                    I accept the <br />
                    and have read the <br />
                    If I am a micro- or small enterprise or a not-for- <br />
                    profit organization in the EEA or UK, I agree to the
                  </label>
                </div>
              </div>
              <Button
                type="submit"
                disabled={!isFormValid}
                className={`transition duration-300 ease-in-out ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Carregando..." : "Login"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
      <Image
        alt="backgroundPage"
        src={BackgroundLogin}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
