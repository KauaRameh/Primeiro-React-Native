import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Páginas da sua aplicação
function Page1Screen({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Olá meu nome é Kauã</Text>
      <Text style={styles.pageText}>
        Tenho 18 anos, moro em Recife, Pernambuco, concluí o ensino médio em dezembro de dois mil e vinte e dois e atualmente estou me formando em ADS, com início do curso sendo em março de dois mil e vinte e três. Tenho o português como língua materna e falo um pouco de inglês e espanhol. Gostaria de destacar primeiro o que eu amo mais no mundo, meu irmãozinho Enzo, que tem apenas 6 anos. Sou uma pessoa muito competitiva e gosto de expressar essa competitividade em alguns jogos online, onde alcancei alguns marcos bem legais. Aprecio um bom anime e adoro um refrigerante. Sobre meu futuro, espero trabalhar no desenvolvimento de IA ou como desenvolvedor web back-end (de preferência com IA), porque é uma tecnologia que me intriga de uma forma surreal.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function Page2Screen({ navigation }) {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageText}>Concluí o ensino médio em uma escola técnica especializada em tecnologia. Durante esse período, me formei como Técnico em Análise e Desenvolvimento de Sistemas, onde adquiri uma base sólida em programação, banco de dados e desenvolvimento de software.

Atualmente, estou cursando e me formando em Análise e Desenvolvimento de Sistemas na Faculdade SENAC. Este curso tem proporcionado uma experiência enriquecedora, aprofundando meus conhecimentos em áreas como engenharia de software, sistemas distribuídos e inteligência artificial.

Minha jornada educacional tem sido marcada pela paixão por resolver problemas complexos por meio da tecnologia. Estou entusiasmado para aplicar o que aprendi tanto em projetos acadêmicos quanto em futuras oportunidades profissionais, especialmente em áreas que envolvem inovação e desenvolvimento de soluções tecnológicas.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
}

// Configuração do Stack Navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Remover o cabeçalho padrão
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={Page1Screen} />
        <Stack.Screen name="Page2" component={Page2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  // Função para navegar para a página 1
  const navigateToPage1 = () => {
    navigation.navigate('Page1');
  };

  // Função para navegar para a página 2
  const navigateToPage2 = () => {
    navigation.navigate('Page2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('./assets/kakaauuu.jpg')}
          style={styles.imagePerfil}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.nomeTitulo}>Kauã Rameh</Text>
        <Text style={styles.whiteText}>Desenvolvedor Back-end</Text>
        <View style={styles.iconsContainer}>
          <Image
            source={require('./assets/jsicon.webp')}
            style={styles.imageIconJS}
          />
          <Image
            source={require('./assets/mysqlicon.png')}
            style={styles.imageIcon}
          />
          <Image
            source={require('./assets/reacticonn.png')}
            style={styles.imageIcon}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={navigateToPage1}>
            <Text style={styles.buttonText}>Sobre Mim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={navigateToPage2}>
            <Text style={styles.buttonText}>Educação</Text>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C151D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    alignItems: 'center',
    marginTop: -90,
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  imagePerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  yellowText: {
    fontSize: 30,
    color: '#FFE071',
  },
  whiteText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  nomeTitulo: {
    fontSize: 30,
    color: '#FFE071',
    marginBottom: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  imageIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  imageIconJS: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#171F26', // Nova cor do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#0C151D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 28,
    color: '#FFE071',
    marginBottom: 10,
    textAlign: 'center',
  },
  pageText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default App;
