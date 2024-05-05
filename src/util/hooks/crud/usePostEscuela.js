/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import useAxios from './useAxios'; // Asumiendo que useAxios está en este archivo

const usePostEscuela = (handleOpenToast, updateData) => {
  const { fetchData, response, errorRequest, isLoading } = useAxios();

  // Encapsula la lógica para enviar los datos de la escuela
  const postEscuela = useCallback(async (escuela) => {
    await fetchData({
      url: import.meta.env.VITE_api_post_escuelas, 
      method: 'POST',
      data: { nombre: escuela },
    });
  }, [fetchData]);

  const openToast = useCallback((type, message) => {
    handleOpenToast(type, message);
  }, [handleOpenToast]);
  
  const update = useCallback((data) => {
    updateData(data);
  }, [updateData]);

  // Maneja la respuesta
  useEffect(() => {
    if (response) {
      openToast('success', `Escuela ${response.nombre} agregada`);
      update(response);
    }
  }, [response]);

  // Maneja los errores
  useEffect(() => {
    if (errorRequest) {
      openToast('error', errorRequest);
    }
  }, [errorRequest]);

  // Maneja el isLoading
  useEffect(() => {
  if (isLoading) {
    console.log('Loading...');
  }
  })

  return { postEscuela, isLoading };
};

export default usePostEscuela;