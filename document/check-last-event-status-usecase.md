# CheckLastEventStatus UseCase

> ## Dados
* Id do Grupo

> ## Fluxo primário
1. Obter os dados de último evento do grupo (data de término e duração do mercado de notas)
2. Retornar status "ativo" se o evento ainda não foi encerrado

> ## Fluxo alternativo: Evento está no limite de encerramento
2. Retornar status "ativo"

> ## Fluxo alternativo: Evento encerrado, mas está dentro do período do marcado das notas
2. Retornar status "em revisão"

> ## FLuxo alternativo: Evento e mercado de notas encerrados
2. Retornar status "encerrado"

> ## Fluxo alternativo: Grupo não tem nenhum evento marcado
2. Retornar status "encerrado"