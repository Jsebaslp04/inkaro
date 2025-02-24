let Separator = ({ height, color }) => {
    console.log('cualquier mensaje que necesito mostrara', color)
    let styles = { width: "100%", height: `${height}px`, display: 'block', backgroundColor: `${!color ? "white" : color}` };
    return <span style={styles}></span>;
};

export default Separator
