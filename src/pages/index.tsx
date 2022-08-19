import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Knight } from "../components/Knight";

export default function Home() {
  const [name, setName] = useState('');
  const [born, setBorn] = useState('');
  const [goldKnight, setGoldKnight] = useState('');

  function handleGenerateItem() {
    const date = new Date(`${born}T00:00`);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    /*
    Áries: do dia 21 de março a 20 de abril;
    Touro: de 21 de abril a 20 de maio;
    Gêmeos: de 21 de maio a 20 de junho;
    Câncer: de 21 de junho a 22 de julho;
    Leão: de 23 de julho a 22 de agosto;
    Virgem: de 23 de agosto a 22 de setembro;
    Libra: de 23 de setembro a 22 de outubro;
    Escorpião: de 23 de outubro a 21 de novembro;
    Sagitário: de 22 de novembro a 21 de dezembro;
    Capricórnio: de 22 de dezembro a 20 de janeiro;
    Aquário: de 21 de janeiro a 18 de fevereiro;
    Peixes: de 19 de fevereiro a 20 de março.
    */
    setGoldKnight('');

    if ((day >= 21 && month == 3) || (day <= 20 && month == 4)) {
      setGoldKnight('Áries');
    }

    if ((day >= 21 && month == 4) || (day <= 20 && month == 5)) {
      setGoldKnight('Touro');
    }

    if ((day >= 21 && month == 5) || (day <= 20 && month == 6)) {
      setGoldKnight('Gêmeos');
    }

    if ((day >= 21 && month == 6) || (day <= 22 && month == 7)) {
      setGoldKnight('Câncer');
    }

    if ((day >= 23 && month == 7) || (day <= 22 && month == 8)) {
      setGoldKnight('Leão');
    }

    if ((day >= 23 && month == 8) || (day <= 22 && month == 9)) {
      setGoldKnight('Virgem');
    }

    if ((day >= 23 && month == 9) || (day <= 22 && month == 10)) {
      setGoldKnight('Libra');
    }

    if ((day >= 23 && month == 10) || (day <= 21 && month == 11)) {
      setGoldKnight('Escorpião');
    }

    if ((day >= 22 && month == 11) || (day <= 21 && month == 12)) {
      setGoldKnight('Sagitário');
    }

    if ((day >= 22 && month == 12) || (day <= 20 && month == 1)) {
      setGoldKnight('Capricórnio');
    }

    if ((day >= 21 && month == 1) || (day <= 18 && month == 2)) {
      setGoldKnight('Aquário');
    }

    if ((day >= 19 && month == 2) || (day <= 20 && month == 3)) {
      setGoldKnight('Peixes');
    }
  }

  return (
    <Flex w='100vw' h='100vh' align='center' justify='center' flexDirection='column' gap='10'>
      <Flex as='form' width='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDirection='column' >
        <Stack spacing={4}>
          <Input
            name='name'
            type='text'
            placeholder='Nome'
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            name='born'
            type='date'
            placeholder='Data de Nascimento'
            onChange={(event) => setBorn(event.target.value)}
          />
        </Stack>

        <Button type='button' mt='6' colorScheme='pink' size='lg' onClick={handleGenerateItem}>
          Gerar
        </Button>
      </Flex>

      {
        !!goldKnight &&
        <Knight name={name} sign={goldKnight} />
      }

    </Flex>
  )
}
