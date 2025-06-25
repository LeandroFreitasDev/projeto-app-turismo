import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
  ScrollView,
  Keyboard,
} from 'react-native';
import { styles } from './styles';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

type DrawerProps = DrawerNavigationProp<any>;

type Lugar = {
  id: number;
  nome: string;
  imagem: any;
  descricao: string;
};

const lugares: Lugar[] = [
  {
    id: 1,
    nome: 'Catedral',
    imagem: require("../../../assets/catedral.jpg"),
    descricao:
      'A Catedral de São Pedro de Alcântara é a principal igreja da cidade serrana e o lugar que guarda os restos mortais da família imperial. O nome oficial é uma homenagem ao padroeiro de Petrópolis e da monarquia brasileira.',
  },
  {
    id: 2,
    nome: 'Museu Imperial',
    imagem: require("../../../assets/Museu.jpg"),
    descricao:
      'O Museu Imperial de Petrópolis abriga um dos mais importantes acervos do Brasil relacionados ao Império. Ele funcionava como palácio de verão de Dom Pedro II.',
  },
  {
    id: 3,
    nome: 'Palácio Amarelo',
    imagem: require("../../../assets/palacioamarelo.jpg"),
    descricao:
      'O Palácio Amarelo localiza-se no centro histórico da cidade. Situado na praça Visconde de Mauá, atualmente é a sede da Câmara Municipal de Petrópolis.',
  },
  {
    id: 4,
    nome: 'Palácio de Cristal',
    imagem: require("../../../assets/palacio.jpg"),
    descricao:
      'Inaugurado em 1884, possui estrutura metálica em estilo francês construída em 1884. O Palácio de Cristal foi inicialmente construído para abrigar exposições agrícolas, mas hoje abriga exposições e eventos.',
  },
  {
    id: 5,
    nome: 'Quitandinha',
    imagem: require("../../../assets/quitandinha.jpg"),
    descricao:
      'O Palácio Quitandinha foi construído a partir de 1941 para ser o maior cassino hotel da América do Sul. Hoje abriga um centro cultural do SESC com exposições e eventos.',
  },
];

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [sugestao, setsugestao] = useState('');
  const [lugarSelecionado, setLugarSelecionado] = useState<Lugar | null>(null);

  const navigation = useNavigation<DrawerProps>();

  function handleOpenModal(lugar: Lugar) {
    setLugarSelecionado(lugar);
    setModalVisible(true);
  }

  function handleSend() {

    Keyboard.dismiss();


    setTimeout(() => {
      if (!sugestao.trim()) {
        Alert.alert('Preencha sua sugestão!');
        return;
      }

      console.log(`Sugestão para ${lugarSelecionado?.nome}: ${sugestao}`);
      setsugestao('');
      setModalVisible(false);
    }, 100); 
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {lugares.map((lugar) => (
          <TouchableOpacity
            key={lugar.id}
            onPress={() => handleOpenModal(lugar)}
          >
            <Image style={styles.image} source={lugar.imagem} />
            <Text style={styles.buttonText}>{lugar.nome}</Text>
          </TouchableOpacity>
        ))}

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{lugarSelecionado?.nome}</Text>
              <Text style={styles.modalDescricao}>
                {lugarSelecionado?.descricao}
              </Text>

              <Text style={styles.modalText}>Formulário de Contato</Text>
              <TextInput
                placeholder="Digite sua sugestão"
                style={styles.input}
                value={sugestao}
                onChangeText={setsugestao}
                multiline
              />

              <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text style={styles.buttonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
