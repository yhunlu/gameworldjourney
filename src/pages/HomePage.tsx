import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { GameGrid } from '../components/games';
import { GenreList } from '../components/genres';
import {
  GameHeading,
  PlatformSelector,
  SortSelector,
  TagSelector,
} from '../components/home';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <Box marginRight={5}>
              <SortSelector />
            </Box>
            <TagSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
