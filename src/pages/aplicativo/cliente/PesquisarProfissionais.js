import React from "react";
import { View, Text } from "react-native";

import FabButton from "../../../components/FabButtonGroup";

const PesquisarProfissionais = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pesquisar Profissionais</Text>
      <FabButton
        style={{ bottom: 80, right: 60 }}
        buttons={[true, false]}
        icon2="search"
        texto1="Filtrar"
      />
    </View>
  );
};

export default PesquisarProfissionais;
