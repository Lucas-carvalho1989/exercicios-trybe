const validateInfo = (name, age) => {
  // seu código aqui
    if (!name || !age) {
      throw new Error('Todas as informações são necessárias');
    }
  }
const validação = (age) => {
    if (age < 18) {
      throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
    }
  }

  const studentRegister = (name, age) => {
    try {
      validateInfo(name, age);
      validateLegalAge(age);
      return `${name}, boas-vindas à AuTrybe!`;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(studentRegister("Carlos", 18)); // Fluxo completo
  console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
  console.log(studentRegister("Renan")) // Fluxo de exceção
  