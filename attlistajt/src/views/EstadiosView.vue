<script>
export default {
  data() {
    return {
      estadios: [
        {id: '7332e932-7bc7-47e2-99d0-a2c9dc7b4d31', nome: 'TD Garden',  time:'Boston Celtics'},
        {id: '72674295-4b5d-4668-8abc-c968a307c9fc', nome: 'Staples Center', time:'Los Angeles Clippers'},
        {id: '64fe1b8c-12cb-4d94-9233-a56167aab6a7', nome: 'Moda Center',time:'Portland Trailblazers'},
        {id: 'e33d09ba-8db8-4dd1-be14-0cea1ad9ac59', nome: 'Pepsi Center', time: 'Denver Nuggets'},
        {id: '7abaf6ba-6a70-4838-81d6-9d4eb40c0d34', nome: 'Target Center', time:'Minnesota Timberwolves'},
      ],
    };
  },
}
</script>
<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Gerenciamento de Estádios</h2>
      </div>
      <div class="form-input">
        <input type="text" />
        <button>Salvar</button>
      </div>
      <div class="list-estadio">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
              <th>Times</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='estadio in estadios' :key="estadio.id">
              <td>{{estadio.id}}</td>
              <td>{{estadio.nome}}</td>
              <td>{{estadio.time}}</td>
              <td>??</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<style>
.title {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(147, 147, 147);
  border-radius: 10px;
  padding: 0 10px;
}
.form-input button {
  margin-left: 1px;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  background-color: rgb(227, 170, 0);
  color: rgb(255, 255, 255);
  font-weight: bold;
  cursor: pointer;
}
.list-estadio{
  display: flex;
  justify-content: center;
}
.list-estadio table{
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
}
table tr td{
  border: 1px solid rgb(211, 211, 211);
  padding: 10px;
}
</style>
