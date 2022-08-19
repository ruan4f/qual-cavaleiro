import { Button, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Knight } from "../components/Knight";

export default function Home() {
  const [name, setName] = useState('');
  const [born, setBorn] = useState('');
  const [goldKnight, setGoldKnight] = useState('');
  let auxGoldKnight = '';

  function getGoldKnight(bornDay: number, bornMonth: number, firstDay: number, firstMonth: number, secondDay: number, secondMonth: number, sign: string, signNew: string) {
    if (signNew) return signNew;
    return ((bornDay >= firstDay && bornMonth == firstMonth) || (bornDay <= secondDay && bornMonth == secondMonth)) ? sign : '';
  }

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
    auxGoldKnight = getGoldKnight(day, month, 21, 3, 20, 4, 'Áries', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 21, 4, 20, 5, 'Touro', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 21, 5, 20, 6, 'Gêmeos', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 21, 6, 22, 7, 'Câncer', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 23, 7, 22, 8, 'Leão', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 23, 8, 22, 9, 'Virgem', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 23, 9, 22, 10, 'Libra', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 23, 10, 21, 11, 'Escorpião', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 22, 11, 21, 12, 'Sagitário', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 22, 12, 20, 1, 'Capricórnio', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 21, 1, 18, 2, 'Aquário', auxGoldKnight);
    auxGoldKnight = getGoldKnight(day, month, 19, 2, 20, 3, 'Peixes', auxGoldKnight);

    setGoldKnight(auxGoldKnight);
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
