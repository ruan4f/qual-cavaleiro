import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface KnightProps {
  name: string;
  sign: string;
}

export function Knight({ name, sign }: KnightProps) {
  const translateSign = `${sign.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}.jpeg`;

  return (
    <Flex align='center' justify='center' flexDirection='column' gap='10'>
      <Box flexDirection='column'>
        <Image boxSize='300px' src={`/images/${translateSign}`} alt={`${translateSign}`} />
      </Box>
      <Box>
        <Text>{name} de {sign}</Text>
      </Box>
    </Flex>
  );
}