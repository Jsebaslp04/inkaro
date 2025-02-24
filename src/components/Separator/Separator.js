let Separator = ({ height, color }) => {
    let styles = { width: "100%", height: `${height}px`, display: 'block', backgroundColor: `${!color ? "white" : color}` };
    return <span style={styles}></span>;
};

export default Separator
