#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //get offset
    float offset = 1.0 / 300.0;
    vec2 offsets[9] = vec2[](
        vec2(-offset,  offset), // top-left
        vec2( 0.0f,    offset), // top-center
        vec2( offset,  offset), // top-right
        vec2(-offset,  0.0f),   // center-left
        vec2( 0.0f,    0.0f),   // center-center
        vec2( offset,  0.0f),   // center-right
        vec2(-offset, -offset), // bottom-left
        vec2( 0.0f,   -offset), // bottom-center
        vec2( offset, -offset)  // bottom-right    
    );

    //define kernel
    float kernel[9] = float[](
        -1.0, -1.0, -1.0,
        -1.0,  8.1, -1.0,
        -1.0, -1.0, -1.0
    );

    //apply kernel
    vec3 sampleTex[9];
    for(int i = 0; i < 9; i++)
    {
        sampleTex[i] = vec3(texture(image, texcoord.st + offsets[i]));
    }
    vec3 col = vec3(0.0);
    for(int i = 0; i < 9; i++)
    {
        col += sampleTex[i] * kernel[i];
    }

    //set FragColor
    // FragColor = texture(image, texcoord);
    FragColor = vec4(col, 1.0);
}
