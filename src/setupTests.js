const firestore = () => {
  return {
    collection: jest.fn().mockReturnThis(() => {
      return {
        doc: jest.fn(() => {
          return {
            set: jest.fn(),
            get: jest.fn(),
          };
        }),
      };
    }),
  };
};

export { firestore };
