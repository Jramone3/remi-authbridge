export function simulateAgentDialogue(user) {
  const remiMain = `REMI: Usuario ${user} autenticado. ¿Validamos el token?`;
  const remiAuditor = `REMI_Auditor: Validación completada. Token aceptado para persistencia.`;
  return [remiMain, remiAuditor];
}
