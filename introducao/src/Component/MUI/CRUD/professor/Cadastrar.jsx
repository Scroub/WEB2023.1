import { Typography, TextField, Box, FormControl, FormLabel, FormGroup, FormControlLabel, InputLabel, Select, MenuItem, Button, Checkbox } from "@mui/material"
import { useState } from "react"

const Cadastrar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("GRAD")
    const [ai, setAi] = useState({es:false, al:false, ds:false, mc:false})

    const {es, al, ds, mc} = ai

    function handleSubmit(event) {
        event.preventDefault()
        alert("Cadastrado!")
    }

    function handleCheckbox(event) {
        setAi({
            ...ai,
            [event.target.name]:event.target.checked
        })

    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Cadastrar Professor
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
            >
                <TextField
                    margin="normal"
                    required
                    autoFocus
                    fullWidth
                    id="nome"
                    name="nome"
                    label="Nome Completo"
                    onChange={(event) => setNome(event.target.value)}
                />
    
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="curso"
                    name="curso"
                    label="Curso"
                    onChange={(event) => setCurso(event.target.value)}
                />

                <FormControl fullWidth sx={{mt:2}}>
                    <InputLabel id="select-tit-label">Titulação</InputLabel>
                    <Select
                        labelId="select-tit-label"
                        label="Titulação"
                        value={titulacao}
                        onChange={(event) => setTitulacao(event.target.value)}
                    >
                        <MenuItem value="GRAD">Graduação</MenuItem>
                        <MenuItem value="MEST">Mestrado</MenuItem>
                        <MenuItem value="DOUT">Doutorado</MenuItem>
                    </Select>
                </FormControl>

                <FormControl
                    component="fieldset"
                    variant="standard"
                    sx={{my:2}}
                >
                    <FormLabel 
                        component="legend"
                        sx={{fontSize:12, mb: 2}}

                    >
                        Areas de Interesse
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={es} name="es" onChange={handleCheckbox}/>} label="Engenharia de Software"/>
                        <FormControlLabel control={<Checkbox checked={al} name="al" onChange={handleCheckbox}/>} label="Algoritmos"/>
                        <FormControlLabel control={<Checkbox checked={ds} name="ds" onChange={handleCheckbox}/>} label="Desenvolvimento de Software"/>
                        <FormControlLabel control={<Checkbox checked={mc} name="mc" onChange={handleCheckbox}/> } label="Matematica Computacional"/>
                    </FormGroup>
                </FormControl>

                <Box sx={{display:"flex", justifyContent:"start"}}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{my:3}}
                    >
                        Cadastrar
                    </Button>
                </Box>
               
            </Box>
        </>
    )
}

export default Cadastrar