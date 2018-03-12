
const server = {
    'presets': [
        [
            '@babel/preset-env', {
                'targets': {
                    'node': '4'
                }
            }
        ]
    ]
};
export { server };

const client = {
    'presets': [
        [
            '@babel/preset-env', {
                'targets': {
                    'browsers': ['chrome >= 64']
                },
                'modules': false
            }
        ]
    ]
};
export { client };

export default {
    server,
    client
};
