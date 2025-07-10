import { GLSL, Shaders } from "gl-react";

export const blueContrast = Shaders.create({
  coolBlue: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;

      void main() {
        vec4 color = texture2D(t, uv);

        // Cool tone adjustment
        float red = color.r * 0.9;
        float green = color.g * 1.0;
        float blue = color.b * 1.2;

        // Slight desaturation
        float gray = (red + green + blue) / 3.0;
        red = mix(gray, red, 0.8);
        green = mix(gray, green, 0.8);
        blue = mix(gray, blue, 0.95);

        // Optional contrast boost
        red = (red - 0.5) * 1.1 + 0.5;
        green = (green - 0.5) * 1.1 + 0.5;
        blue = (blue - 0.5) * 1.1 + 0.5;

        gl_FragColor = vec4(red, green, blue, color.a);
      }
    `,
  },
});
